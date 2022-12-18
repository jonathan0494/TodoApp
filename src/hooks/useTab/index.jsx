import React, { useState } from 'react';

const useTab = (children) => {
    const [activeTab, setActiveTab] = useState(0);

    return { activeTab,
             TabContent: () => children[activeTab],
             onClickTab: id => setActiveTab(id) };
}

export default useTab;