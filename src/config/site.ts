export interface SiteConfig {
	ownerEntity: string;
	supportEmail: string;
	effectiveDate: string;
	countryOrJurisdiction: string;
	jurisdiction: string;
	appStoreUrl: string;
	playStoreUrl: string;
	copyrightYear: string;
}

function fromEnv(value: string | undefined, fallback: string): string {
	const trimmed = value?.trim();
	return trimmed && trimmed.length > 0 ? trimmed : fallback;
}

export const siteConfig: SiteConfig = {
	ownerEntity: fromEnv(import.meta.env.PUBLIC_OWNER_ENTITY, 'YOUR_NAME_OR_ENTITY'),
	supportEmail: fromEnv(import.meta.env.PUBLIC_SUPPORT_EMAIL, 'YOUR_CONTACT_EMAIL'),
	effectiveDate: fromEnv(import.meta.env.PUBLIC_EFFECTIVE_DATE, 'EFFECTIVE_DATE'),
	countryOrJurisdiction: fromEnv(
		import.meta.env.PUBLIC_COUNTRY_OR_JURISDICTION,
		'YOUR_COUNTRY_OR_JURISDICTION'
	),
	jurisdiction: fromEnv(import.meta.env.PUBLIC_JURISDICTION, 'YOUR_JURISDICTION'),
	appStoreUrl: fromEnv(import.meta.env.PUBLIC_APP_STORE_URL, 'APP_STORE_URL'),
	playStoreUrl: fromEnv(import.meta.env.PUBLIC_PLAY_STORE_URL, 'PLAY_STORE_URL'),
	copyrightYear: fromEnv(import.meta.env.PUBLIC_COPYRIGHT_YEAR, 'YEAR')
};
