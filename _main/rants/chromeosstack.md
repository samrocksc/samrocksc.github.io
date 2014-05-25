My Chrome OS Software Stack
=====

Chrome OS has now been amongst us for two years now, and folks are still not quite sure how to treat it.  Is it a toy? Is it a tool? Is it for show or for fun?  When I first unloaded my Samsung armhf Chromebook back in December I was unleashed into a whole new world.  It felt like an incomplete world though.  Where was my ability to do all the things that I NEEDED to get done.  Modifying images was "okay", but not complete.  Coding was "okay", but it was still hassle to do.  A bit of a background I have used Linux as an end-user since I was 16, and it has been my primary OS since about 1998.  Chrome OS felt like a linux machine, but with a huge chunk of its soul missing!

I set out on a quest to turn the ChromeOS into a functioning member of society via a software stack.  Eventually I would like to see the dev team at Chrome heed what they are seeing be emulated and make it a hard coded member of the Chrome OS.

At the time of this writing I was using the Samsung armhf architecture chromebook.  I am writing this guide to keep myself, and you up to date on how to create a development atmosphere within Chrome OS.  I want to preface this by saying that in my experience so far having a fast browser has been a lot more important than having the flash and bang of a desktop environment provided by linux. Everything that needs to be done in linux can be done through the browser.  This guide is being written for all architectures where some software may not be written yet.  I would highly recommend to any convert to Chromeos as a development atmosphere learning how to use VIM.

This is going to be work in progress, and hopefully I can update it frequently for you folks as I find better tools.  I will also include some howto's with some of the software that is difficult to install:

*since ChromeOS is built to work in the cloud, I have chose to install almost everything from the cloud via compiling bleeding edge github repos*

Sam's ChromeOS Software Stack
-----

1. Enable Dev Mode on Chromebook
  * You can find out how to change your chromebook to dev mode by visiting this [link](http://www.chromium.org/chromium-os/developer-information-for-chrome-os-devices)
2. Install [Crouton](https://github.com/dnschneid/crouton) w/e17 support(we keep a window manager, but not a desktop environment, we want to use ChromeOS to its potential, not a DE).
  * You can find more about crouton here: [https://github.com/dnschneid/crouton](https://github.com/dnschneid/crouton).
  * Use this script for enlightenment: **sudo sh -e ~/Downloads/crouton -t e17**
3. Now you have a stable chroot installed, but we're not even going to use that fancy window manager.  In fact if you can use a chrome app like pixlr, you could just install the "cli" command line interface! Let's get into our shell!
  * Create a new tab with **Ctrl+Alt T**.
  * **shell**->**sudo enter-chroot**
  * type '**ls**' to see your working directory.
4. Initial apt-get installs:
  * build-essentials
  * checkinstall
5. Create a software directory in your chroot at /usr/loca/src.  After installing git I would just pull all needed Apps here.
6. Download/Install git from this [google repo](https://code.google.com/p/git-repo/).
  * build from scratch utilizing checkinstall to create a .deb for easy update and/or removal with dpkg.
7. Install Vim/Pathogen
  * sudo apt-get install vim
  * Use this [Vim Pathogen Howto](https://github.com/tpope/vim-pathogen) to install Pathogen and VIM and add any needed Syntax Repo's.
    * The most useful is probably coffeescript(as it adds several other syntaxes by default).
8. Installing node.js
  * **git clone https://github.com/joyent/node.git**
  * *If using armhf software it is important to use "**/configure --without-snapshot**" to disable v8 snapshot*
9. Bells & Whistles
  * **sudo apt-get install htop** - used to view what processes you currently have running in linux
  * **sudo apt-get install tmux** - who wants one million chrometabs of linux terminals when you can just split your screen!  Learn how to develop in vim and you can have a screen that looks like this:

	[<center><img src="/images/btmuxscreen1.png" width="300px"></center>](/images/btmuxscreen1.png "tmux")
