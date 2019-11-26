import * as React from "react";
import * as renderer from "react-test-renderer";
import {shallow} from "enzyme";
import Radio, {RadioInput} from "../Radio";

describe("Radio Element Test", () => {
    const input : RadioInput = {id:"id", name:"name", label:"label", value: 0};
    const onClick = jest.fn((e: React.ChangeEvent<HTMLInputElement>) => {
    });

    it('Test render correctly', () => {
        const testRenderer = renderer.create(<Radio input={input} onClick={onClick}/>);
        expect(testRenderer.toJSON()).toMatchSnapshot();
    });
    it('Test click event', () => {
        const button = shallow(<Radio input={input} onClick={onClick}/>);
        button.find('input').simulate('click');
        expect(onClick.mock.calls.length).toEqual(1);
    });
});