import React from 'react';
import PropTypes from "prop-types";

export default class ControlsPanel extends React.Component {
    static propTypes = {
        onPrepareClick: PropTypes.func,
        onRotateLeft: PropTypes.func.isRequired,
        onRotateRight: PropTypes.func.isRequired
    };

    static defaultProps = {
        onPrepareClick:()=>{},
    };

    render() {
        return (
            <div className="controls-panel"
                 onMouseEnter={this.props.onPrepareClick}
                 onTouchStart={this.props.onPrepareClick}
            >
                <div className="controls-panel__rotate controls-panel__rotate_left" onClick={this.props.onRotateLeft}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1792 1792">
                        <path d="M1664 896q0 156-61 298t-164 245-245 164-298 61q-172 0-327-72.5t-264-204.5q-7-10-6.5-22.5t8.5-20.5l137-138q10-9
                             25-9 16 2 23 12 73 95 179 147t225 52q104 0 198.5-40.5t163.5-109.5 109.5-163.5
                             40.5-198.5-40.5-198.5-109.5-163.5-163.5-109.5-198.5-40.5q-98 0-188 35.5t-160 101.5l137
                             138q31 30 14 69-17 40-59 40h-448q-26 0-45-19t-19-45v-448q0-42 40-59 39-17 69 14l130
                             129q107-101 244.5-156.5t284.5-55.5q156 0 298 61t245 164 164 245 61 298z"/>
                    </svg>
                </div>
                <div className="controls-panel__rotate controls-panel__rotate-right" onClick={this.props.onRotateRight}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1792 1792">
                        <path d="M1664 256v448q0 26-19 45t-45 19h-448q-42 0-59-40-17-39 14-69l138-138q-148-137-349-137-104 0-198.5
                             40.5t-163.5 109.5-109.5 163.5-40.5 198.5 40.5 198.5 109.5 163.5 163.5 109.5 198.5 40.5q119 0
                             225-52t179-147q7-10 23-12 14 0 25 9l137 138q9 8 9.5 20.5t-7.5 22.5q-109 132-264 204.5t-327
                              72.5q-156 0-298-61t-245-164-164-245-61-298 61-298 164-245 245-164 298-61q147 0 284.5 55.5t244.5
                              156.5l130-129q29-31 70-14 39 17 39 59z"/>
                    </svg>
                </div>
            </div>
        )
    }
}