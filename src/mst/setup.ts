import { onSnapshot } from "mobx-state-tree";
import { RootModel } from ".";

export const setupRootStore = () => {
    const rootTree = RootModel.create({
        employer: {
            id: "1",
            name: "Malin Thann",
            location: "Kompong Chhnang, KPC",
            employees: []
        }
    })
    onSnapshot(rootTree, (snapshot) => console.log("snapshot: ", snapshot))

    return { rootTree };
}
