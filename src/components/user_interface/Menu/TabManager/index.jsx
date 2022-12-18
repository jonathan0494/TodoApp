import Ract from 'react';
import './TabManager.scss'

const TabManager = ({ children, tabs}) => {
    return (
        <div className='tab-manager-container'>
            <div className='tab-group'>
                { tabs.map(tab => (<Tab key={tab.id} title={tab.title} />)) }
            </div>
        </div>
    );
};

const Tab = ({ title }) => {
    return (
        <div className='tab'>
            <span> { title }</span>
        </div>
    );
};

export default TabManager;