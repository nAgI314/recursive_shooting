
/**
 * ダメージを受ける関数
 * @param hp 現在のHP
 * @param damage 受けるダメージ
 * @returns ダメージ後のHP
 */
export const takeDamage = (hp: number, damage: number): number => {
    return Math.max(hp - damage, 0)
}