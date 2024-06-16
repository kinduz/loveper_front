import React, { useState, useEffect, useRef } from "react";
import useSound from "use-sound";
export const Recorder: React.FC = () => {
  const [isRecording, setIsRecording] = useState<boolean>(false);
  const [audioUrl, setAudioUrl] = useState<string | null>(null);
  const [audioBlob, setAudioBlob] = useState<Blob | null>(null);
  const mediaRecorderRef = useRef<MediaRecorder | null>(null);
  const audioChunksRef = useRef<Blob[]>([]);
  const [play, { pause, stop, sound }] = useSound(audioUrl || "", {
    onend: () => {
      console.log("Playback finished.");
    },
  });

  const startRecording = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        audio: true,
      });

      const mediaRecorder = new MediaRecorder(stream);

      mediaRecorder.ondataavailable = (event) => {
        console.log("Data available: ", event.data);
        audioChunksRef.current.push(event.data);
      };

      mediaRecorder.onstop = () => {
        const audioBlob = new Blob(audioChunksRef.current, {
          type: "audio/wav",
        });
        const audioUrl = URL.createObjectURL(audioBlob);
        setAudioBlob(audioBlob);
        setAudioUrl(audioUrl);
        audioChunksRef.current = [];
        console.log("Recording stopped, audioBlob created.");
      };

      mediaRecorder.start();
      mediaRecorderRef.current = mediaRecorder;
      setIsRecording(true);
      console.log("Recording started.");
    } catch (error) {
      console.error("Error accessing microphone: ", error);
    }
  };

  const stopRecording = () => {
    if (mediaRecorderRef.current) {
      mediaRecorderRef.current.stop();
      setIsRecording(false);
      console.log("Recording stopped.");
    }
  };

  const handleRecordButtonClick = () => {
    if (isRecording) {
      stopRecording();
    } else {
      startRecording();
    }
  };

  const handlePause = () => {
    pause();
    console.log("Playback paused.");
  };

  const handleSpeedChange = (rate: number) => {
    if (sound) {
      sound.playbackRate(rate);
      console.log(`Playback speed set to ${rate}x.`);
    }
  };

  return (
    <div>
      <button onClick={handleRecordButtonClick}>
        {isRecording ? "Stop Recording" : "Start Recording"}
      </button>

      {audioUrl && (
        <div>
          <button onClick={() => play()}>Play</button>
          <button onClick={handlePause}>Pause</button>
          <button onClick={() => stop()}>Stop</button>
          <div>
            <button onClick={() => handleSpeedChange(0.5)}>0.5x Speed</button>
            <button onClick={() => handleSpeedChange(1)}>1x Speed</button>
            <button onClick={() => handleSpeedChange(1.5)}>1.5x Speed</button>
          </div>
          <audio src={audioUrl} controls />
        </div>
      )}
    </div>
  );
};
