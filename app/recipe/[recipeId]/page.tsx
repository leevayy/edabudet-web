import Image from "next/image";
import styles from "./page.module.css";
import fetchRecipe from "@/app/fetchRecipe";
import Search from "@/app/components/search";

type FilteredData = {
    name: string;
    image: {
        src: string,
        alt: string,
        width: number,
        height: number
    };
    ingridients: string[];
    tags: {icon: string, name: string}[];
    cookTime?: string;
    servings?: string | number;
    macros: {value: number | string, name: string}[]; 
}

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
            {icon: '🥦', name: 'Vegeterian'},
            {icon: '🍽️', name: 'Lunch/Dinner'},
            {icon: '🇮🇹', name: 'Italian'},
        ],
        cookTime: String(data?.totalTime),
        servings: Math.round(data?.totalWeight / 300),
        macros: [
            {value: 368, name: 'Calories / Serving'},
            {value: 38, name: 'Fat'},
            {value: 17, name: 'Protein'},
            {value: 12, name: 'Carbs'},
        ]
    };

    return (<>
        <Header />
        <Image 
            className={styles.food_image}
            src={filteredData.image.src}
            alt={filteredData.image.alt}
            width={filteredData.image.width}
            height={filteredData.image.height} 
        />
        <div className="info">
            {filteredData.name}
            <div className="tags">
                {filteredData.tags && filteredData.tags.map((tag, i) => (
                    <Tag key={tag.name + i} {...tag} />
                ))}
            </div>
        </div>
        {filteredData.ingridients.join('; ')}
    </>);
}

function Header() {
    return <div className="header">
        <Image src="/edabudet-logo-small.svg" alt="Eda Búdet" width={205} height={50} />
        <Search size="small" />
    </div>
}

type TagProps = {
    icon: string,
    name: string
}

function Tag(props: TagProps) {
    return (
        <div className="tag">
            <span>{props.icon}</span>
            {props.name}
        </div>
    )
}