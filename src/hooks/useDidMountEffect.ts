import { useEffect, useRef } from "react";

// Ref: https://stackoverflow.com/a/57941438/10835772
const useDidMountEffect = (func: any, deps: any[]) => {
	const didMount = useRef(false);

	useEffect(() => {
		if (didMount.current) func();
		else didMount.current = true;
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, deps);
};

export default useDidMountEffect;
