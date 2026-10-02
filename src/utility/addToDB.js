const getStore = () => {
    const storeSTR = localStorage.getItem("installedList");
    if(storeSTR) {
        const storeData = JSON.parse(storeSTR);
        return storeData
    }
    else {
        return [];
    }
}

const addToStoreDB = (id) => {
    const storeData = getStore();
    if(storeData.includes(id)) {
        alert('Already Exit')
    }
    else {
        storeData.push(id);
        const data = JSON.stringify(storeData);
        localStorage.setItem("installedList", data)
    }
     
}

export {addToStoreDB, getStore}