/* Copyright (c) 2019-present Evereal. All rights reserved. */

using UnityEngine;

namespace Evereal.VideoCapture
{
  [RequireComponent(typeof(VideoCapture))]
  public class VideoCaptureHotkey : MonoBehaviour
  {

    [Header("Hotkeys")]
    public KeyCode startCapture = KeyCode.F1;
    public KeyCode stopCapture = KeyCode.F2;
    public KeyCode cancelCapture = KeyCode.F3;
    public bool showHintUI = true;

    private VideoCapture videoCapture;
    public VideoCaptureGUI captureGUI;
    public playVideo videoPlay;
        private bool isAlreadyRecording = false;
    private void Awake()
    {
      videoCapture = GetComponent<VideoCapture>();
      Application.runInBackground = true;
            //videoCapture.StartCapture();
        }

    void Update()
    {
      if (Input.GetKeyUp(startCapture)&&isAlreadyRecording==false)
      {
        videoCapture.StartCapture();
                isAlreadyRecording = true;
      }
      else if (Input.GetKeyUp(stopCapture))
      {
        videoCapture.StopCapture();
              
       
      }
      else if (Input.GetKeyUp(cancelCapture))
      {
        videoCapture.CancelCapture();
      }
    }

    void OnGUI()
    {
      if (showHintUI)
      {
        GUI.Label(new Rect(10, 10, 200, 20), startCapture.ToString() + ": Start Capture");
        GUI.Label(new Rect(10, 30, 200, 20), stopCapture.ToString() + ": Stop Capture");
        GUI.Label(new Rect(10, 50, 200, 20), cancelCapture.ToString() + ": Cancel Capture");
      }
    }
  }
}