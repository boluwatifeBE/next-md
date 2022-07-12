export interface MDpost {
	frontmatter: {
		cover_image: string | undefined;
		date:
			| string
			| number
			| boolean
			| ReactElement<any, string | JSXElementConstructor<any>>
			| ReactFragment
			| ReactPortal
			| null
			| undefined;
		title:
			| string
			| number
			| boolean
			| ReactElement<any, string | JSXElementConstructor<any>>
			| ReactFragment
			| ReactPortal
			| null
			| undefined;
		excerpt:
			| string
			| number
			| boolean
			| ReactElement<any, string | JSXElementConstructor<any>>
			| ReactFragment
			| ReactPortal
			| null
			| undefined;
	};
	slug: any;
}
