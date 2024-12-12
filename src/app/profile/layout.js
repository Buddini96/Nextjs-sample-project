export default function ProfileLayout({ children }) {
    return (
      <div>
        <div>
            <h3>Profile Header</h3>
        </div>
        { children }
        <div>
            <h3>Profile Footer</h3>
        </div>
      </div>
    );
}