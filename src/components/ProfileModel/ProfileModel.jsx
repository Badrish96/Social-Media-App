import { Modal, useMantineTheme } from "@mantine/core";

function ProfileModel({ modalOpened, setModalOpened }) {
  const theme = useMantineTheme();

  return (
    <>
      <Modal
        overlayColor={
          theme.colorScheme === "dark"
            ? theme.colors.dark[9]
            : theme.colors.gray[2]
        }
        overlayProps={{
          backgroundOpacity: 0.55,
          blur: 3,
        }}
        overlayOpacity={0.55}
        overlayBlur={3}
        size="55%"
        opened={modalOpened}
        onClose={() => setModalOpened(false)}
      >
        <form className="loginForm">
          <h3>Your Info</h3>
          <div>
            <input
              type="text"
              className="loginInput"
              name="firstName"
              placeholder="First Name"
            />
            <input
              type="text"
              className="loginInput"
              name="lastName"
              placeholder="Last Name"
            />
          </div>
          <div>
            <input
              type="text"
              className="loginInput"
              name="worksAt"
              placeholder="Works at"
            />
          </div>
          <div>
            <input
              type="text"
              className="loginInput"
              name="livesIn"
              placeholder="Lives In"
            />
            <input
              type="text"
              className="loginInput"
              name="country"
              placeholder="Country"
            />
          </div>
          <div>
            <input
              type="text"
              className="loginInput"
              name="relationshipStatus"
              placeholder="Relationship Status"
            />
          </div>
          <div style={{ fontSize: "12px" }}>
            <span style={{ width: "24%" }}>Profile Image</span>
            <input
              type="file"
              name="profileImage"
              style={{ marginLeft: "-50px" }}
            />
            <span style={{ width: "24%" }}>Cover Image</span>
            <input
              type="file"
              name="coverImage"
              style={{ marginLeft: "-50px" }}
            />
          </div>
          <button className="button logout-btn">Update</button>
        </form>
      </Modal>
    </>
  );
}

export default ProfileModel;
