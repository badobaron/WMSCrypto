import React from 'react';
import PropTypes from 'prop-types';

const ICONS = {
    'visibility': 'data:image/svg+xml;base64,PHN2ZyBmaWxsPSIjMDAwMDAwIiBoZWlnaHQ9IjI0IiB2aWV3Qm94PSIwIDAgMjQgMjQiIHdpZHRoPSIyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4NCiAgICA8cGF0aCBkPSJNMCAwaDI0djI0SDB6IiBmaWxsPSJub25lIi8+DQogICAgPHBhdGggZD0iTTEyIDQuNUM3IDQuNSAyLjczIDcuNjEgMSAxMmMxLjczIDQuMzkgNiA3LjUgMTEgNy41czkuMjctMy4xMSAxMS03LjVjLTEuNzMtNC4zOS02LTcuNS0xMS03LjV6TTEyIDE3Yy0yLjc2IDAtNS0yLjI0LTUtNXMyLjI0LTUgNS01IDUgMi4yNCA1IDUtMi4yNCA1LTUgNXptMC04Yy0xLjY2IDAtMyAxLjM0LTMgM3MxLjM0IDMgMyAzIDMtMS4zNCAzLTMtMS4zNC0zLTMtM3oiLz4NCjwvc3ZnPg==',
    'visibility off': 'data:image/svg+xml;base64,PHN2ZyBmaWxsPSIjMDAwMDAwIiBoZWlnaHQ9IjI0IiB2aWV3Qm94PSIwIDAgMjQgMjQiIHdpZHRoPSIyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4NCiAgICA8cGF0aCBkPSJNMCAwaDI0djI0SDB6bTAgMGgyNHYyNEgwem0wIDBoMjR2MjRIMHptMCAwaDI0djI0SDB6IiBmaWxsPSJub25lIi8+DQogICAgPHBhdGggZD0iTTEyIDdjMi43NiAwIDUgMi4yNCA1IDUgMCAuNjUtLjEzIDEuMjYtLjM2IDEuODNsMi45MiAyLjkyYzEuNTEtMS4yNiAyLjctMi44OSAzLjQzLTQuNzUtMS43My00LjM5LTYtNy41LTExLTcuNS0xLjQgMC0yLjc0LjI1LTMuOTguN2wyLjE2IDIuMTZDMTAuNzQgNy4xMyAxMS4zNSA3IDEyIDd6TTIgNC4yN2wyLjI4IDIuMjguNDYuNDZDMy4wOCA4LjMgMS43OCAxMC4wMiAxIDEyYzEuNzMgNC4zOSA2IDcuNSAxMSA3LjUgMS41NSAwIDMuMDMtLjMgNC4zOC0uODRsLjQyLjQyTDE5LjczIDIyIDIxIDIwLjczIDMuMjcgMyAyIDQuMjd6TTcuNTMgOS44bDEuNTUgMS41NWMtLjA1LjIxLS4wOC40My0uMDguNjUgMCAxLjY2IDEuMzQgMyAzIDMgLjIyIDAgLjQ0LS4wMy42NS0uMDhsMS41NSAxLjU1Yy0uNjcuMzMtMS40MS41My0yLjIuNTMtMi43NiAwLTUtMi4yNC01LTUgMC0uNzkuMi0xLjUzLjUzLTIuMnptNC4zMS0uNzhsMy4xNSAzLjE1LjAyLS4xNmMwLTEuNjYtMS4zNC0zLTMtM2wtLjE3LjAxeiIvPg0KPC9zdmc+'
};


const VisibilityIcon = (props) => {
    const { size, visible, onClick } = props;
    let icon = 'visibility';
    if (visible) {
        icon = 'visibility off'
    }
    return (
        <div className="Icon"
             onClick={onClick}
             style={{
                width: size,
                height: size,
                backgroundImage: `url(${ICONS[icon]})`
        }}/>
    )
};

VisibilityIcon.propTypes = {
    onClick: PropTypes.func.isRequired,
    size: PropTypes.number.isRequired,
    visible: PropTypes.bool
};

export default VisibilityIcon;