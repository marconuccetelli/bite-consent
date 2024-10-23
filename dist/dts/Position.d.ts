type Position = 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
type CustomPosition = {
    top?: number | string;
    left?: number | string;
    right?: number | string;
    bottom?: number | string;
};
declare const isCustomPosition: (position: any) => position is CustomPosition;
export default Position;
export { CustomPosition, isCustomPosition };
