/**
 * try ...catch
 * 
 * 1. 발생시킬 때 -> 던진다고한다. (throw)
 * 2. 명시적으로 인지할 때 -> 잡는다고한다. (catch)
 * 
 */

function runner(){
    try{
        console.log('Hello');

        throw new Error('큰 문제가 생겼습니다!');

        console.log('CodeFactory');
    } catch(e) { // catch : 에러가 발생하면(throw) catch로 이동한다.
        console.log('---catch---');
        console.log(e);
    } finally { // finally : 에러가 났든 안났든 무조건 실행한다.
        console.log('---finally---');
    }
    
}

runner();
































