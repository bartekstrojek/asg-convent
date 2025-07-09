import { ComponentProps, ComponentType, LazyExoticComponent, Suspense } from 'react';
import { Spinner } from '../Components/Common/Spinner/Spinner';

const lazyBlock = <T extends ComponentType<any>>(LazyComponent: LazyExoticComponent<T>, spinnerSize:  ComponentProps<typeof Spinner>['size'] = 'small') =>
    (props: ComponentProps<T>) => (
        <Suspense fallback={<Spinner size={spinnerSize} />}>
            <LazyComponent {...props} />
        </Suspense>
    );

export default lazyBlock;
