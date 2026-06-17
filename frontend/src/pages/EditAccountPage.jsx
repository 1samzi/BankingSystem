export default function EditAccountPage({ account, error, onCancel, onSave }) {
  const isNewAccount = !account;

  return (
    <section className="content-section form-section">
      <div className="section-heading">
        <div>
          <p className="eyebrow">Account</p>
          <h2>{isNewAccount ? 'New account' : 'Edit details'}</h2>
        </div>
      </div>

      <form className="detail-form" onSubmit={(event) => {
        event.preventDefault();

        const formData = new FormData(event.currentTarget);

        onSave({
          name: formData.get('name'),
          accountType: formData.get('accountType'),
          balance: Number(formData.get('balance')),
        });
      }}>
        <label>
          Account name
          <input defaultValue={account?.name ?? ''} name="name" required type="text" />
        </label>

        <label>
          Account type
          <select defaultValue={account?.accountType ?? 'EVERYDAY'} name="accountType">
            <option value="EVERYDAY">Everyday</option>
            <option value="RESERVE">Reserve</option>
            <option value="GOAL">Goal</option>
          </select>
        </label>

        <label>
          Starting balance
          <input defaultValue={account?.balance ?? 0} min="0" name="balance" required step="0.01" type="number" />
        </label>

        {error && <p className="form-error">{error}</p>}

        <div className="button-row">
          <button className="primary-button" type="submit">
            {isNewAccount ? 'Create' : 'Save'}
          </button>
          <button className="secondary-button" onClick={onCancel} type="button">
            Cancel
          </button>
        </div>
      </form>
    </section>
  );
}
