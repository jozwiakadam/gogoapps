//Testing
import {render} from '@testing-library/react';
import faker from 'faker';

//Components
import Button from './Button';

describe('Button component', () => {
    it('should render with custom class name', () => {
        const className = faker.lorem.word();

        const {container} = render(<Button className={className} onClick={jest.fn()}>Content</Button>);

        expect(container.firstChild).toHaveClass(className);
    });
});
