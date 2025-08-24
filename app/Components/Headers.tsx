"use client";
import React, { useState } from 'react';
import './Header_style.css';

interface Tab {
  id: number;
  title: string;
  content: string;
}

const Header = () => {
  const [tabs, setTabs] = useState<Tab[]>([]);
  const [activeTab, setActiveTab] = useState<number | null>(null);
  const [editingContent, setEditingContent] = useState<string>('');

  const addNewTab = () => {
    const newTab = {
      id: tabs.length + 1,
      title: `Tab ${tabs.length + 1}`,
      content: ''
    };
    setTabs([...tabs, newTab]);
    setActiveTab(newTab.id);
    setEditingContent('');
  };

  const updateTabContent = (content: string) => {
    if (activeTab) {
      setTabs(tabs.map(tab => 
        tab.id === activeTab ? { ...tab, content } : tab
      ));
      setEditingContent(content);
    }
  };

  return (
    <div className="header">
      <h2 className="header-title">Header</h2>
      <div className="tabs-header">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            className={`tab ${activeTab === tab.id ? 'active' : ''}`}
            onClick={() => {
              setActiveTab(tab.id);
              setEditingContent(tab.content);
            }}
          >
            {tab.title}
          </button>
        ))}
        <button className="add-tab" onClick={addNewTab}>
          <span>+</span>
        </button>
      </div>
      <div className="tab-content">
        {activeTab && (
          <textarea
            className="content-editor"
            value={editingContent}
            onChange={(e) => updateTabContent(e.target.value)}
            placeholder="Type your content here..."
          />
        )}
      </div>
    </div>
  );
};

export default Header;