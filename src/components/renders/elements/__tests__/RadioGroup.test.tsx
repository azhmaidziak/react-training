import * as React from "react";
import * as renderer from "react-test-renderer";
import { shallow } from "enzyme";
import Radio, {RadioInput} from "../Radio";
import RadioGroup from "../RadioGroup";


describe("Radio Group Test", () => {
const className = "className";
    const inputs: RadioInput[] = [
        {
            id: "id_1",
            name: "name_1",
            label: "label_1",
            value: 0
        },
        {
            id: "id_2",
            name: "name_2",
            label: "label_2",
            value: 1
        }
    ];
    const onClick = jest.fn((e: React.ChangeEvent<HTMLInputElement>) => {
    });

    it("Test render correctly", () => {
        const testRenderer = renderer.create(
                <RadioGroup className={className} inputs={inputs} onChange={onClick} />
        );
        expect(testRenderer.toJSON()).toMatchSnapshot();
    });

    it("Test click event", () => {
        const button = shallow( <RadioGroup className="className" inputs={inputs} onChange={onClick} />);
        button.find(Radio).first().simulate("change");
        expect(onClick.mock.calls.length).toEqual(1);
    });

});