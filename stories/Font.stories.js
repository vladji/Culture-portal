import React from 'react'

export default {
	title: 'Font',
  	decorators: [story => <div style={{ padding: '3%'}}>{story()}</div>],
}

export const RegularContentText = () => {
	return (
		<p>
			Yuri Viktorovich Tarich (1885-1967) and Vladimir Vladimirovich Korsh-Sablin (1900 - 1974) 
			are considered as the founders of Belarusian cinema. They have forever entered the history
			 of Belarusian cinema as the first domestic writers and directors. More than 500 feature
			films, several thousand documentaries and about 100 cartoons were shot at "Belarusian Film".
			During the Second World War there was also produced a film magazine "Soviet Belarus,"
			containing a front chronicle. In 1996, the film studio received a new name - "National Film
			Studio" Belarusian Film."
		</p>
	)
}

export const Headings = () => {
	return (
		<div>
			<h1>Heading 1</h1>
			<h2>Heading 2</h2>
			<h3>Heading 3</h3>
			<h4>Heading 4</h4>
			<h5>Heading 5</h5>
			<h6>Heading 6</h6>
		</div>
	)
}

export const LightHeading = () => {
	return (
		<div className="bg-primary">
			<h2 className="page-title light">
            	This is light heading
          	</h2>
		</div>
	)
}
