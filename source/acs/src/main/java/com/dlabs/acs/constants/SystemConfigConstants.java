package com.dlabs.acs.constants;

public interface SystemConfigConstants {
	
	public interface TIMER 
	{
		String MODULE_NAME = "TIMER";
		
		String TIMER_CAP_MINUTES = "TIMER_CAP_MINUTES";
		String TIMER_LI_MINUTES = "TIMER_LI_MINUTES";
		String TIMER_ANALYSYS_MINUTES = "TIMER_ANALYSYS_MINUTES";
		String TIMER_INBASKET = "TIMER_INBASKET";
		String TIMER_ASPIRATION_MINUTES = "TIMER_ASPIRATION_MINUTES";
		
		String TIMER_READ_MEMO = "TIMER_READ_MEMO";
		String TIMER_VISION_SPEECH_ALL = "TIMER_VISION_SPEECH_ALL";
		String TIMER_VISION_SPEECH_RECORD = "TIMER_VISION_SPEECH_RECORD";
		
		String TIMER_SIMULATION_II = "TIMER_SIMULATION_II";
		
		int DEFAULT_CAP_MINUTES = 90;
		int DEFAULT_LI_MINUTES = 60;
		int DEFAULT_INBASKET_MINUTES = 120;
		int DEFAULT_ANALYSYS_MINUTES = 90;
		int DEFAULT_READ_MEMO = 60;
		int DEFAULT_VISION_SPEECH_ALL = 15;
		int DEFAULT_VISION_SPEECH_RECORD = 3;
		int DEFAULT_ASPIRATION_MINUTES = 15;
		
		int DEFAULT_TIMER_SIMULATION_II = DEFAULT_INBASKET_MINUTES + DEFAULT_ANALYSYS_MINUTES + DEFAULT_READ_MEMO + DEFAULT_VISION_SPEECH_ALL + 30;
	}
	
}