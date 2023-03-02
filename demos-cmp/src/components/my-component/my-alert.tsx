import { Component, h, Prop, EventEmitter, Event } from '@stencil/core';
import {NotificationType} from '../../utils/notification-service';

@Component({
  tag: 'my-alert',
  styles: `
    :host {
      display: block;
      --alert-text: #ffffff;
      --alert-border: #000000;
      --alert-error-bg-color: #f44336;
      --alert-warn-bg-color: #ff9800;
      --alert-info-bg-color: #2196F3;
    }

    .alert {
      --alert-bg-color: var(--alert-error-bg-color);
      padding: 5px;
      background-color: var(--alert-bg-color);
      color: var(--alert-text);
      border: 1px solid var(--alert-border);
      border-radius: 0.375rem;
      opacity: 0.83;
      margin-bottom: 2px;
    }

    .closebtn {
      margin-left: 15px;
      color: var(--alert-text);
      font-weight: bold;
      float: right;
      font-size: 22px;
      line-height: 20px;
      cursor: pointer;
      transition: 0.3s;
    }

    .closebtn:hover {
      color: var(--alert-border);
    }

    .warn {
      --alert-bg-color: var(--alert-warn-bg-color);
    }

    .info {
      --alert-bg-color: var(--alert-info-bg-color);
    }
    `,
  shadow: true,
})
export class MyAlert {
  @Prop() message!: string;
  @Prop() type: NotificationType = NotificationType.error;
  @Event() clear: EventEmitter<null>;

  render() {
    if (this.message) {
      return (
        <div class={{alert: true, warn: this.type === NotificationType.warn, info: this.type === NotificationType.info}}>
          <span class="closebtn" role='button' aria-label="Close" onClick={() => this.clear.emit()}>&times;</span>
          {this.message}
          <br/>
          {this.type}
        </div>
      );
    }
    return null;
  }
}
