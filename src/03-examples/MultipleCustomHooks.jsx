import { useCounter, useFetch } from '../hooks';
import { LoadingQuote, Quote } from '.';



export const MultipleCustomHooks = () => {
	const { counter, increment } = useCounter(1);

	const { data, isLoading, hasError } = useFetch(`https://api.breakingbadquotes.xyz/v1/quotes/${counter}`);

	// console.log(data, isLoading, hasError)
	//Si la data tiene un valor (!!data) entonces toma el valor de la data en la posición 0 (data[0])
	const { author, quote } = !!data && data[0];

	return (
		<>
			<h1>Breaking Bad Quotes</h1>
			<hr />
			{
				isLoading
					? <LoadingQuote />
					: <Quote author={author} quote={quote}/>

			}

			<button
				className='btn btn-primary'
				onClick={event => increment(1)}
				disabled={isLoading}
			>
				Next quote
			</button>
		</>
	)
}
