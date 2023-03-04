# ----------------------------------
# Colors
# ----------------------------------
NOCOLOR='\033[0m'
RED='\033[0;31m'
GREEN='\033[0;32m'
ORANGE='\033[0;33m'
BLUE='\033[0;34m'
PURPLE='\033[0;35m'
CYAN='\033[0;36m'
LIGHTGRAY='\033[0;37m'
DARKGRAY='\033[1;30m'
LIGHTRED='\033[1;31m'
LIGHTGREEN='\033[1;32m'
YELLOW='\033[1;33m'
LIGHTBLUE='\033[1;34m'
LIGHTPURPLE='\033[1;35m'
LIGHTCYAN='\033[1;36m'
WHITE='\033[1;37m'
END='\033[0m'

# ----------------------------------
# Detect the platform
# ----------------------------------
case $(uname | tr '[:upper:]' '[:lower:]') in
  linux*)
    OS_NAME=linux
    ;;
  darwin*)
    OS_NAME=osx
    ;;
  msys*)
    OS_NAME=windows
    ;;
  *)
    OS_NAME=notset
    ;;
esac

command_exists () {
  command -v "$1" >/dev/null 2 >&1
}

nvm_check() {
  export NVM_DIR="$HOME/.nvm"

  if [ -s "$NVM_DIR/nvm.sh" ]; then

    # Check if NVM is set
    if ! command_exists nvm; then
      # Fix for macOS to manually set nvm path 
      if [[ "$OS_NAME" == 'osx' ]]; then
        echo "${YELLOW}If command fails, please run below command to manually set nvm in path${END}";
        echo "${LIGHTPURPLE}source ~/.nvm/nvm.sh${END}";
      fi

      source "$NVM_DIR/nvm.sh"
    fi

  else
    echo "\n\n${RED}WARN: cannot find nvm.  some tasks may hang unexpectidly${END}";
  fi
}
nvm_check;

# ----------------------------------
# Workaround for Windows 10, Git Bash and Yarn
# ----------------------------------
if command_exists winpty && test -t 1; then
  exec < /dev/tty
fi
