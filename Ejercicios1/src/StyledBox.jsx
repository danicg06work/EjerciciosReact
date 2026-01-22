import React from 'react';
const StyledBox = () => {
    const styles = {
        color: '#ffffffff',
        backgroundColor: '#6cf73577',
        padding: '20px',
        textAlign: 'center',
        borderRadius: '10px'
        
    }

    return (
        <div className="syled-box" style = {styles}>
            Este es un StyleBox
        </div>
    );
}
export default StyledBox;