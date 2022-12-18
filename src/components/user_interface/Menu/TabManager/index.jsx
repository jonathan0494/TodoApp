import Ract from 'react';
import { useTab } from '../../../../hooks'
import './TabManager.scss'

const TabManager = ({ children, tabs}) => {
    const { activeTab, TabContent, onClickTab } = useTab(children);
    return (
        <div className='tab-manager-container'>
            <div className='tab-group'>
                { tabs.map(tab => (<Tab key={tab.id} 
                                        tab={tab} 
                                        activeTab={activeTab}
                                        onClickTab={onClickTab} />)) }
            </div>
        </div>
    );
};

const Tab = ({ tab, activeTab, onClickTab }) => {
    const className = activeTab === tab.id ? 'tab active' : 'tab';
    return (
        <div className={className} onClick={() => onClickTab(tab.id)}>
            <span> { tab.title }</span>
        </div>
    );
};

export default TabManager;