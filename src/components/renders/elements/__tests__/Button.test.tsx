import * as React from 'react';
import Button from '../Button';
import { shallow } from 'enzyme';
import * as renderer from 'react-test-renderer';

describe("Button Element Test", () => {
    const label = "Button";
    const onClick =  jest.fn((e: React.MouseEvent) => {});

    it('Test render correctly', () => {
        const testRenderer = renderer.create(<Button label={label} onClick={onClick}/>);
        expect(testRenderer.toJSON()).toMatchSnapshot();
    });
    it('Test click event', () => {
        const button = shallow(<Button label={label} onClick={onClick}/>);
        button.find('button').simulate('click');
        expect(onClick.mock.calls.length).toEqual(1);
    });
});