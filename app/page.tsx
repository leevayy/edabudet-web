"use client";

import Image from "next/image";
import styles from "./page.module.css";
import { useState, ChangeEvent, Suspense, useDeferredValue} from "react";

import { useDebouncedCallback } from 'use-debounce';
import { useSearchParams, usePathname, useRouter } from 'next/navigation';
import fetchSearchResults from "./fetchSearchResults";

export default function Home() {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();
	const [query, setQuery] = useState(searchParams.get('query')?.toString() || '');

  const [searchResults, setSearchResults] = useState<any>(fetchSearchResults(searchParams.get('query')?.toString() || ''));

  // ! const defferedQuery = useDeferredValue(query);

  const search = useDebouncedCallback((q: string) => {
    const params = new URLSearchParams(searchParams);
    if (q) {
      params.set('query', q);
    } else {
      params.delete('query');
    }
    replace(`${pathname}?${params.toString()}`);

    setSearchResults(fetchSearchResults(q));
  }, 300)

	function handleInput(e: ChangeEvent<HTMLInputElement>) {
    const q = e.target.value;
		setQuery(q);
    search(q);
	}

  function handleClear() {
    setQuery('');
    search('');
  }

	return (<div className={styles.search_container}>
		<div className={styles.search}>
			<Image src={"edabudet-logo.svg"} alt="Eda Budet" width={600} height={120} />
			<div className={styles.search_bar}>
				<span className={styles.search_icon}>⌕</span>
				<input type="text" value={query} placeholder="search" onInput={handleInput} />
				{query.length !== 0 && <button className={styles.close_icon} onClick={handleClear}>x</button>}
			</div>
		</div>
    {
        query.length !== 0 && (
          <Suspense key={query} fallback={<SearchResultsFallback />}>
            <SearchResults searchResults={searchResults}/>
          </Suspense>
        )
      }  
  </div>);
}

function SearchResults({searchResults}: {searchResults: any}){
  return <ul className={styles.search_results}>{searchResults && searchResults.map((result: any, i: number) => (
    <li className={styles.search_result}>
      <Image
        src={result.images.THUMBNAIL.url}
        alt={`result ${i}`}
        width={result.images.THUMBNAIL.width} 
        height={result.images.THUMBNAIL.height}
      />
      <div className="description">
        <h1 style={{fontSize: result.label.split('').length > 10 ? `${36 - result.label.split('').length / 2}pt` : '36pt'}}>{result.label}</h1>
        <div className="traits">🥦  🍽️  🇮🇹 </div>
      </div>
    </li>))}
  </ul>
}

function SearchResultsFallback(){
  return <>...</>
}
