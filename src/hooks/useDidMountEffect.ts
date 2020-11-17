/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useRef } from "react";

// Ref: https://stackoverflow.com/a/57941438/10835772
const useDidMountEffect = (func: any, deps: any[]): void => {
	const didMount = useRef(false);

	useEffect(() => {
		if (didMount.current) func();
		else didMount.current = true;
	}, [func, deps]);
};

export default useDidMountEffect;
