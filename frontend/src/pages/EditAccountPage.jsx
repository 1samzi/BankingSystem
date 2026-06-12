export default function EditAccountPage({ account, onCancel, onSave }) {
  return (
    <section className="content-section form-section">
      <div className="section-heading">
        <div>
          <p className="eyebrow">Account</p>
          <h2>Edit details</h2>
        </div>
      </div>

      <form className="detail-form" onSubmit={(event) => {
        event.preventDefault();
        onSave();
      }}>
        <label>
          Account name
          <input defaultValue={account.name} type="text" />
        </label>

        <label>
          Account type
          <select defaultValue={account.type}>
            <option>Everyday</option>
            <option>Reserve</option>
            <option>Goal</option>
          </select>
        </label>

        <label>
          Display number
          <input defaultValue={account.accountNumber} type="text" />
        </label>

        <div className="button-row">
          <button className="primary-button" type="submit">
            Save
          </button>
          <button className="secondary-button" onClick={onCancel} type="button">
            Cancel
          </button>
        </div>
      </form>
    </section>
  );
}
