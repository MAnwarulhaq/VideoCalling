import React, { useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';
import { ZegoUIKitPrebuilt } from '@zegocloud/zego-uikit-prebuilt';

const VideoRoom = () => {
  const { roomId} = useParams();
  const meetingContainer = useRef(null);

  useEffect(() => {
    if (meetingContainer.current) {
      const appID = 1127476781;
      const serverSecret = "f2cbe57ada6a7e97266bbb41d25e40f5";

      const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(
        appID,
        serverSecret,
        roomId,
        Date.now().toString(),
        "anwar"
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
    }

    return () => {
      if (meetingContainer.current) {
        const zp = ZegoUIKitPrebuilt.create(null); // Cleanup the session on unmount
      }
    };
  }, [roomId]);

  return (
    <div>
      <div ref={meetingContainer} style={{ width: '100vw', height: '100vh' }} />
    </div>
  );
};

export default VideoRoom;
