import React from 'react';
import styles from './styles';

const RenderButton = ({selectedBlock, multiList, selectBlock, updateTextBox, getOppositeMode, it}) => (
  <div
    style={selectedBlock === it ? {...styles.myStyle, ...styles.selectedStyle} : styles.myStyle}
    onClick={() => {
      selectBlock(it);
      updateTextBox(multiList[it][getOppositeMode()][0]);
    }}
    >
    {multiList[it][getOppositeMode()][0]}
  </div>
)

const multiChoice = ({selectedBlock, multiList, selectBlock, updateTextBox, getOppositeMode}) => (
  <div style={styles.multiContainer}>
    <div style={styles.buttonRow}>
      {multiList.map((yo, index) => {
        return (
          <RenderButton
            it={index}
            selectedBlock={selectedBlock}
            multiList={multiList}
            selectBlock={selectBlock}
            updateTextBox={updateTextBox}
            getOppositeMode={getOppositeMode}
          />
        )
      })}
    </div>
  </div>
)

export default multiChoice
