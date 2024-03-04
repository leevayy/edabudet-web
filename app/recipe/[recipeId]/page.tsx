import Image from "next/image";
import styles from "./page.module.css";
import fetchRecipe from "@/app/fetchRecipe";
import Search from "@/app/components/search/search";
import Logo from "@/app/components/logo/logo";

type FilteredData = {
	name: string;
	image: {
		src: string;
		alt: string;
		width: number;
		height: number;
	};
	ingridients: string[];
	tags: { icon: string; name: string }[];
	cookTime?: string;
	servings?: string | number;
	macros: { value: number | string; name: string }[];
};

export default function Recipe({ params }: { params: { recipeId: string } }) {
	const data = fetchRecipe(`http://www.edamam.com/ontologies/edamam.owl#${params.recipeId}`)!;
	const filteredData: FilteredData = {
		name: data.label,
		image: {
			src: data.images.LARGE!.url,
			alt: data.label,
			width: 512,
			height: 512,
		},
		ingridients: data.ingredientLines,
		tags: [
			{ icon: "🥦", name: "Vegeterian" },
			{ icon: "🍽️", name: "Lunch/Dinner" },
			{ icon: "🇮🇹", name: "Italian" },
		],
		cookTime: String(data?.totalTime),
		servings: Math.round(data?.totalWeight / 300),
		macros: [
			{ value: 368, name: "Calories / Serving" },
			{ value: 38, name: "Fat" },
			{ value: 17, name: "Protein" },
			{ value: 12, name: "Carbs" },
		],
	};

	return (
		<div className={styles.container}>
			<Header />
			<main className={styles.main}>
				<Image
					className={styles.food_image}
					src={filteredData.image.src}
					alt={filteredData.image.alt}
					width={filteredData.image.width}
					height={filteredData.image.height}
				/>
				<div className={styles.info}>
                    <div className={styles.upper}>
                        <div className={styles.headline}>
                            <h1 className={styles.name}>{filteredData.name}</h1>
                            <Image src="/like.svg" alt="Press Like!" width={52} height={52} />
                        </div>
                        <div className={styles.tags}>
                            {filteredData.tags && filteredData.tags.map((tag, i) => <Tag key={tag.name + i} {...tag} />)}
                        </div>
                    </div>
                    <div className={styles.additional_info_wrapper}>
                        {filteredData.cookTime && <AdditionalInfo name="cook time" value={filteredData.cookTime} type="default"/> }
                        {filteredData.servings && <AdditionalInfo name="servings" value={filteredData.servings} type="default"/> }
                        {
                            filteredData.macros.map(macro => (
                                <AdditionalInfo name={macro.name} value={macro.value} type="macro" />
                            ))
                        }
                    </div>
                </div>
				{/* {filteredData.ingridients.join('; ')} */}
			</main>
		</div>
	);
}

function Header() {
	return (
		<div className={styles.header}>
			<Logo size="small" />
			<Search size="small" />
		</div>
	);
}

type TagProps = {
	icon: string;
	name: string;
};

function Tag(props: TagProps) {
	return (
		<div className={styles.tag}>
			<span className={styles.tag_logo}>{props.icon}</span>
			<span className={styles.tag_name}>{props.name}</span>
		</div>
	);
}

const defaultFontSize = 26;

function AdditionalInfo({name, value, type}: {name: string, value: string | number, type: 'default' | 'macro'}) {
	return <div className={`${styles[type]} ${styles.additional_info}`}>
        <span className={styles.value} style={{
            fontSize: String(value).length > 1
                    ? `${defaultFontSize - String(value).length * 3}pt`
                    : `${defaultFontSize}pt`,
        }}>{value}</span>
        <span className={styles.name}>{name}</span>
    </div>
}
