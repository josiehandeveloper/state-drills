import React from 'react';


class Accordion extends React.Component {
    static defaultProps = { 
        sections: [], 
    };
    state = {
        currentSectionIndex: null, 
    }
    handleSetCurrentSection = (sectionIndex) => {
        this.setState({ currentSectionIndex: sectionIndex })
    }

    renderItems(section, idx, currentSectionIndex) {
        return (
            <li className='Accordion__item' key={idx}>
                <button
                    type='button'
                    onClick={() => this.handleSetCurrentSection(idx)}
                >
                    {section.title}
                </button>
                {(currentSectionIndex === idx) && <p>{section.content}</p>}
            </li>

        )
    }


    render() {
        const { currentSectionIndex } = this.state
        const { sections } = this.props
        return (
            <ul className='Accordion'>
                {sections.map((section, idx) =>
                    this.renderItems(section, idx, currentSectionIndex)
                )}
            </ul>
        )
    }
}
            
export default Accordion;


