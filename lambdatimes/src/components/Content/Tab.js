    
import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"

const Tab = ({ tab, selectTabHandler, selectedTab }) => {
  /* Using your props, determine if the `tab` prop matches the `selectedTab` prop, 
      if they match, the className should be: 'tab active-tab', 
      if it is not it should just be 'tab'*/
  return (
    <div
      className={tab === selectedTab ? "tab active-tab" : "tab"}
      onClick={() => selectTabHandler(tab)}
    >
      {/* Replace this dummy click handler function with your selectTabHandler function from props 
         you'll need to pass the `tab` in as an argument to this handler. */}
      {tab.toUpperCase()}
    </div>
  )
}

// Make sure you include PropTypes on your props.

Tab.propTypes = {
  tab: PropTypes.string,
  selectTabHandler: PropTypes.func,
  selectedTab: PropTypes.string
}





export default Tab