game.TitleScreen = me.ScreenObject.extend({
    /**
     *  action to perform on state change
     */
    onResetEvent: function() {
      // play the audio track
      me.audio.playTrack("DST-InertExponent");
    },

    /**
     *  action to perform when leaving this screen (state change)
     */
  onDestroyEvent: function() { 
  // stop the current audio track
    me.audio.stopTrack();
}
});
