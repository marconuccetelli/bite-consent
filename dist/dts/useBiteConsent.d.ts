import CookieConfig from './CookieConfig';
import Position, { CustomPosition } from './Position';
import { Theme } from './ThemeContext';
type BiteConsentResult = {
    consentCookie: string | undefined;
    show: () => void;
    revoke: () => void;
};
type BiteConsentOptions = {
    privacyPolicyUrl: string;
    text?: string;
    visibility?: 'auto' | 'visible' | 'hidden';
    position?: Position | CustomPosition;
    cookieConfig?: CookieConfig;
    theme?: Theme;
    onAccept?: () => void;
};
declare const useBiteConsent: (options: BiteConsentOptions) => BiteConsentResult;
export default useBiteConsent;
