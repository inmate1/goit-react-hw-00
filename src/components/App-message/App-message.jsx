export const Mailbox = ({ username, messages }) => {
  return (
    <div>
      <p>Hello {username}</p>
      {messages > 0 ? (
        <div>
          <p>You have {messages} unread messages</p>
         
        </div>
      ) : (
        <p>No unread messages</p>
      )}
    </div>
  );
};

const userData = {
    username: "fafa",
    messages: "f'sjfe'jfe"
};

Mailbox(userData);