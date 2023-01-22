import { mount } from "@vue/test-utils";
import ListOfTraits from "../../src/components/ListOfTraits.vue";

describe("ListOfTraits", () => {
  it("Text table has to be 'TraitValue'", () => {

    const wrapperTraits = mount(ListOfTraits)
    const table = wrapperTraits.get("table")
  
    expect(table.text()).toBe("TraitValue")
  })
})
