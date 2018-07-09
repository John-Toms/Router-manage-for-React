import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Button, Switch } from 'antd';

import Icon from './Icon';
import { FlexBox, FlexItem } from './flex';

class FooterToolbar extends Component {
    static propTypes = {
        canvasRef: PropTypes.any,
        preview: PropTypes.bool,
        onChangePreview: PropTypes.func,
        zoomRatio: PropTypes.number,
    }

    render() {
        const { canvasRef, preview, zoomRatio, onChangePreview } = this.props;
        if (!canvasRef.current) {
            return null;
        }
        const zoomValue = parseInt(zoomRatio * 100, 10);
        return (
            <FlexBox className="rde-canvas-toolbar-container" flex="1">
                <FlexItem className="rde-canvas-toolbar rde-canvas-toolbar-zoom">
                    <Button shape="circle" onClick={e => canvasRef.current.handlers.zoomOut()}>
                        <Icon name="search-minus" />
                    </Button>
                    <div>{zoomValue}%</div>
                    <Button shape="circle" onClick={e => canvasRef.current.handlers.zoomIn()}>
                        <Icon name="search-plus" />
                    </Button>
                </FlexItem>
                <FlexItem className="rde-canvas-toolbar rde-canvas-toolbar-pager">
                    <Button shape="circle">
                        <Icon name="angle-left" />
                    </Button>
                    <div>1 / 1</div>
                    <Button shape="circle">
                        <Icon name="angle-right" />
                    </Button>
                </FlexItem>
                <FlexItem className="rde-canvas-toolbar rde-canvas-toolbar-action">
                    <span style={{ marginRight: 8 }}>Preview</span>
                    <Switch checked={preview} onChange={onChangePreview} />
                </FlexItem>
            </FlexBox>
        );
    }
}

export default FooterToolbar;
