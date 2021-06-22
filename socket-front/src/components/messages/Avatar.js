import React from "react";
import PropTypes from "prop-types";

import generateAvatarFromHash from "../../helpers/generateAvatar";

const Avatar = ({ user }) => {
  if (user.avatar) {
    return (
      <img
        className="avatar"
        src={user.avatar}
        alt={`Avatar ${user.firstName}`}
      />
    );
  } else {
    const { color, colorLighten } = generateAvatarFromHash(user.id.toString());
    const firstChar = user.firstName[0].toUpperCase();
    return (
      <div
        style={{
          background: `linear-gradient(135deg, ${color} 0%, ${colorLighten} 96.52%)`
        }}
        className="avatar avatar--symbol"
      >
        {firstChar}
      </div>
    );
  }
};

Avatar.propTypes = {
  className: PropTypes.string
};

export default Avatar;