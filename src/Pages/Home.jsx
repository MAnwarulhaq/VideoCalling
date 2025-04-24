import React, { useEffect, useRef } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import { ZegoUIKitPrebuilt } from '@zegocloud/zego-uikit-prebuilt';

const VideoRoom = () => {
  const { roomId } = useParams();
  const location = useLocation();
  const meetingContainer = useRef(null);

  // Get user's name from URL query string
  const queryParams = new URLSearchParams(location.search);
  const userName = queryParams.get('name') || 'Guest';

  useEffect(() => {
    const appID = 1127476781;
    const serverSecret = "f2cbe57ada6a7e97266bbb41d25e40f5";
    const userID = Date.now().toString();

    const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(
      appID,
      serverSecret,
      roomId,
      userID,
      userName
    );

    const zp = ZegoUIKitPrebuilt.create(kitToken);
    zp.joinRoom({
      container: meetingContainer.current,
      sharedLinks: [
        {
          name: 'Copy Link',
          url: `${window.location.origin}/room/${roomId}`,
        },
      ],
      scenario: {
        mode: ZegoUIKitPrebuilt.OneONoneCall,
      },
    });
  }, [roomId, userName]);

  return (
    <div
      style={{
        width: '100vw',
        height: '100vh',
        position: 'fixed',
        top: 0,
        left: 0,
        backgroundColor: '#000',
      }}
    >
      <div ref={meetingContainer} style={{ width: '100%', height: '100%' }} />
    </div>
  );
};

export default VideoRoom;
