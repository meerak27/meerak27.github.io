using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.Video;
using Evereal.VideoCapture;
public class playVideo : MonoBehaviour
{
    public string videoURL;
    private VideoPlayer videoPlayer;

    public RenderTexture renderTexture;
    private void Start()
    {
        renderTexture.Release(); // Release the Render Texture
        renderTexture = null;    // Set the reference to null
    }

    public void playTheVideo(string url)
    {
        videoPlayer = GetComponent<VideoPlayer>();
        videoPlayer.source = VideoSource.Url;
        videoPlayer.url = url;
        videoPlayer.Prepare();
        videoPlayer.Play();
    }


}
