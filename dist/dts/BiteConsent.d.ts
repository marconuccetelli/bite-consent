import React from 'react';
import CookieConfig from './CookieConfig';
import Position, { CustomPosition } from './Position';
declare const CONSENT_COOKIE_NAME = "cookie_consent";
interface Props {
    privacyPolicyUrl: string;
    text?: string;
    visibility?: 'auto' | 'visible' | 'hidden';
    position?: Position | CustomPosition;
    cookieConfig?: CookieConfig;
    onAccept?: () => void;
}
declare const BiteConsent: ({ privacyPolicyUrl, text, visibility, position, cookieConfig, onAccept }: Props) => React.JSX.Element;
export { BiteConsent, CONSENT_COOKIE_NAME };
