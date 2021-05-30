import React from 'react'
import { Remarkable } from 'remarkable';

export default function GsCcMarkdown({txt}) {
  return (
    <div>
      <MarkdownEditor text={txt} />
    </div>
    
  );
}

class MarkdownEditor extends React.Component {
  constructor(props) {
    super(props);
    this.md = new Remarkable();
    this.state = { value: this.props.text };
  }

  getRawMarkup() {
    return { __html: this.md.render(this.state.value) };
  }

  render() {
    return (
      <div>
        <div
          dangerouslySetInnerHTML={this.getRawMarkup()}
        />
      </div>
    );
  }
}

