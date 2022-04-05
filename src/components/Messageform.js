import { PictureOutlined, SendOutlined } from "@ant-design/icons";
import { useState } from "react";
import { isTyping, sendMessage } from "react-chat-engine";

const MessageForm = (props) => {
  const { chatId, creds } = props;
  const [value, setValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const text = value.trim();

    text.length > 0 && sendMessage(creds, chatId, { text });

    setValue("");
  };

  const handleChange = (e) => {
    const { value } = e.target;
    setValue(value);

    isTyping(props, chatId);
  };

  const handleUpload = (e) => {
    sendMessage(creds, chatId, { files: e.target.files, text: "" });
  };
  return (
    <form action="submit" className="message-form" onSubmit={handleSubmit}>
      <input
        type="text"
        className="message-input"
        placeholder="Send a message ..."
        value={value}
        onChange={handleChange}
        onSubmit={handleSubmit}
      />

      <label htmlFor="upload-button">
        <span className="image-button">
          <PictureOutlined className="picture-icon" />
        </span>
      </label>
      <input
        type="file"
        multiple={false}
        id="upload-button"
        style={{ display: "none" }}
        onChange={handleUpload}
      />
      <button type="submit" className="send-button">
        <SendOutlined className="send-icon" />
      </button>
    </form>
  );
};

export default MessageForm;
