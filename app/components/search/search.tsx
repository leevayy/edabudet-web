"use client";

import Image from "next/image";
import styles from "./search.module.css";
import { useState, ChangeEvent, Suspense } from "react";
import { useDebouncedCallback } from "use-debounce";
import { useSearchParams, usePathname, useRouter } from "next/navigation";
import fetchSearchResults from "@/app/fetchSearchResults";

type SearchProps = { size: "small" | "big"};

export default function Search(props: SearchProps) {
	const size = props.size;

	const searchParams = useSearchParams();
	const pathname = usePathname();
	const { replace } = useRouter();
	const [query, setQuery] = useState(searchParams.get("query")?.toString() || "");

	const [searchResults, setSearchResults] = useState<any>(fetchSearchResults(searchParams.get("query")?.toString() || ""));

	const search = useDebouncedCallback((q: string) => {
		const params = new URLSearchParams(searchParams);
		if (q) {
			params.set("query", q);
		} else {
			params.delete("query");
		}
		replace(`${pathname}?${params.toString()}`);

		setSearchResults(fetchSearchResults(q));
	}, 300);

	function handleInput(e: ChangeEvent<HTMLInputElement>) {
		const q = e.target.value;
		setQuery(q);
		search(q);
	}

	function handleClear() {
		setQuery("");
		search("");
	}

	return (
		<div className={styles.search_wrapper} data-size={size}>
			<div className={styles.search}>
				<div className={styles.search_bar}>
					<span className={styles.search_icon}>⌕</span>
					<input type="text" value={query} placeholder="search" onInput={handleInput} />
					{query.length !== 0 && (
						<button className={styles.close_icon} onClick={handleClear}>
							x
						</button>
					)}
				</div>
			</div>
			{query.length !== 0 && (
				<Suspense key={query} fallback={<SearchResultsFallback />}>
					<SearchResults searchResults={searchResults} size={size}/>
				</Suspense>
			)}
		</div>
	);
}

function SearchResults({ searchResults, size }: { searchResults: any, size: SearchProps["size"] }) {
	const defaultFontSize = 
	size === 'big' ? 36 
	: size === 'small' ? 18 
	: 36;

	const imageSizeModifier = 
	size === 'big' ? 1 
	: size === 'small' ? 0.5 
	: 1;

	return (
		<ul className={styles.search_results}>
			{searchResults &&
				searchResults.map((result: any, i: number) => (
					<li className={styles.search_result}>
						<a href={`/recipe/${result.uri.split("#")[1]}`}>
							<Image
								src={result.images.REGULAR.url}
								alt={`result ${i}`}
								width={result.images.THUMBNAIL.width * imageSizeModifier}
								height={result.images.THUMBNAIL.height * imageSizeModifier}
							/>
							<div className="description">
								<h1
									style={{
										fontSize:
											result.label.length > 10
												? `${defaultFontSize - result.label.length / 2}pt`
												: `${defaultFontSize}pt`,
									}}
								>
									{result.label}
								</h1>
								<div className="traits">🥦 🍽️ 🇮🇹 </div>
							</div>
						</a>
					</li>
				))}
		</ul>
	);
}

function SearchResultsFallback() {
	return (
		<ul className={styles.search_results}>
			<li className={styles.search_result}>
				<div className="description">
					<h1>...</h1>
				</div>
			</li>
		</ul>
	);
}
