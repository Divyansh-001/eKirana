package com.eKirana.Util;

import java.util.ArrayList;
import java.util.List;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Component;

@Component
@Lazy
public class ParseUtil 
{
	Pattern patternObj = null;
	Matcher matcher = null;
	
	public List<String> parseLoaction(String pattern, String response)
	{
		List<String> location = null;
		patternObj = Pattern.compile(pattern, Pattern.CASE_INSENSITIVE);
	    matcher = patternObj.matcher(response);
		
	    if(matcher.find())
	    {
	    	location = new ArrayList<String>();
	    	location = new ArrayList<String>();
	    	location.add(matcher.group(1));
	    	location.add(matcher.group(2));
	    }
		return location;
	}
}
