export declare type GiscusProps = Giscus;
export declare type Giscus = {
	repo: Repo;
	repoId: string;
	category?: string;
	categoryId?: string;
	mapping: Mapping;
	term?: string;
	theme?: Theme;
	reactionsEnabled?: BooleanString;
	emitMetadata?: BooleanString;
	lang?: Lang;
};
export declare type BooleanString = "0" | "1";
export declare type Session = {
	session: string;
};
export declare type Repo = `${string}/${string}`;
export declare type Mapping = "url" | "title" | "og:title" | "specific" | "number" | "pathname";
export declare type Theme = "light" | "dark" | "dark_dimmed" | "dark_high_contrast" | "preferred_color_scheme" | "transparent_dark" | `https://${string}`;
export declare type Lang = "en" | "fr" | "de" | "gsw" | "es" | "it" | "ja" | "ko" | "pl" | "id" | "ro" | "zh-CN" | "zh-TW" | string;
export function Giscus({ repo, repoId, category, categoryId, mapping, term, theme, reactionsEnabled, emitMetadata, lang }: GiscusProps): JSX.Element | null;

export {};